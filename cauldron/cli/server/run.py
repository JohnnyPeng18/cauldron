import logging
import os
import site
import sys
from argparse import ArgumentParser

import cauldron as cd
from cauldron.session import writing
from cauldron import environ
from flask import Flask

APPLICATION = Flask('Cauldron')
SERVER_VERSION = [0, 0, 1, 1]


try:
    site_packages = list(site.getsitepackages())
except Exception:
    site_packages = []

active_execution_responses = dict()


server_data = dict(
    version=SERVER_VERSION,
    user=os.environ.get('USER'),
    test=1,
    pid=os.getpid()
)


def get_server_data() -> dict:
    """

    :return:
    """

    out = dict(
        uptime=environ.run_time().total_seconds()
    )
    out.update(server_data)
    out.update(environ.systems.get_system_data())
    return out


def get_running_step_changes() -> list:
    """

    :return:
    """

    project = cd.project.internal_project

    step_changes = []
    for ps in project.steps:
        if ps.is_running:
            step_changes.append(dict(
                name=ps.definition.name,
                action='updated',
                step=writing.write_step(ps)
            ))

    return step_changes


def parse(args=None):
    """

    :param args:
    :return:
    """

    parser = ArgumentParser(description='Cauldron server')

    parser.add_argument(
        '-p', '--port',
        dest='port',
        type=int,
        default=5010
    )

    parser.add_argument(
        '-d', '--debug',
        dest='debug',
        default=False,
        action='store_true'
    )

    parser.add_argument(
        '-v', '--version',
        dest='version',
        default=False,
        action='store_true'
    )

    return vars(parser.parse_args(args=args))


def execute(
        port: int = 5010,
        debug: bool = False,
        public: bool = False,
        host=None,
        **kwargs
):
    """

    :param port:
    :param debug:
    :param public:
    :param host:
    :return:
    """

    if kwargs.get('version'):
        print('VERSION: {}'.format(environ.version))
        sys.exit(0)

    if host is None and public:
        host = '0.0.0.0'

    server_data['host'] = host
    server_data['port'] = port
    server_data['debug'] = debug
    server_data['id'] = environ.start_time.isoformat()

    if not debug:
        log = logging.getLogger('werkzeug')
        log.setLevel(logging.ERROR)

    APPLICATION.run(port=port, debug=debug, host=host)

