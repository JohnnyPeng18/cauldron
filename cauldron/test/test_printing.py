import string

import cauldron
from cauldron.test import support
from cauldron.test.support import scaffolds
from cauldron.test.support.messages import Message


class TestPrinting(scaffolds.ResultsTest):

    def test_print_solo(self):
        """ should properly print in a step that does nothing but print """
        response = support.create_project(self, 'minneapolis')
        self.assertFalse(
            response.failed,
            Message('should have created project', response=response)
        )

        print_string = string.ascii_lowercase

        code = '\n'.join([
            'values = [x ** 2 for x in range(100)]',
            'print("{}")'.format(print_string)
        ])

        support.add_step(self, contents=code)

        response = support.run_command('run -f')
        self.assertFalse(
            response.failed,
            Message('should have run step', response=response)
        )

        project = cauldron.project.internal_project

        self.assertTrue(
            project.steps[0].dom.find(print_string) > 0,
            'should have printed ascii lowercase'
        )

        support.run_command('close')

    def test_print_start(self):
        """ should properly print at the beginning of a step """

        response = support.create_project(self, 'chicago')
        self.assertFalse(
            response.failed,
            Message('should have created project', response=response)
        )

        print_string = string.ascii_lowercase

        code = '\n'.join([
            'import cauldron as cd',
            'print("{}")'.format(print_string),
            'cd.display.text("Hello World")'
        ])

        support.add_step(self, contents=code)

        response = support.run_command('run -f')
        self.assertFalse(
            response.failed,
            Message('should have run step', response=response)
        )

        project = cauldron.project.internal_project

        self.assertTrue(
            project.steps[0].dom.find(print_string) > 0,
            'should have printed ascii lowercase'
        )

        support.run_command('close')

    def test_print_end(self):
        """ should properly print at the end of step """

        response = support.create_project(self, 'madison')
        self.assertFalse(
            response.failed,
            Message('should have created project', response=response)
        )

        print_string = string.ascii_lowercase

        code = '\n'.join([
            'import cauldron as cd',
            'cd.display.text("Hello World")',
            'print("{}")'.format(print_string)
        ])

        support.add_step(self, contents=code)

        response = support.run_command('run -f')
        self.assertFalse(
            response.failed,
            Message('should have run step', response=response)
        )

        project = cauldron.project.internal_project

        self.assertTrue(
            project.steps[0].dom.find(print_string) > 0,
            'should have printed ascii lowercase'
        )

        support.run_command('close')

    def test_print_multiple(self):
        """ should properly print multiple times within a step """

        response = support.create_project(self, 'omaha')
        self.assertFalse(
            response.failed,
            Message('should have created project', response=response)
        )


        code = '\n'.join([
            'import cauldron as cd',
            'print("{}")'.format(string.ascii_lowercase),
            'print("{}")'.format(string.digits),
            'cd.display.text("Hello World")',
            'print("{}")'.format(string.ascii_uppercase),
            'print("{}")'.format(string.hexdigits)
        ])

        support.add_step(self, contents=code)

        response = support.run_command('run -f')
        self.assertFalse(
            response.failed,
            Message('should have run step', response=response)
        )

        project = cauldron.project.internal_project

        self.assertTrue(
            project.steps[0].dom.find(string.ascii_lowercase) > 0,
            'should have printed ascii lowercase'
        )

        self.assertTrue(
            project.steps[0].dom.find(string.ascii_uppercase) > 0,
            'should have printed ascii uppercase'
        )

        self.assertTrue(
            project.steps[0].dom.find(string.digits) > 0,
            'should have printed digits'
        )

        self.assertTrue(
            project.steps[0].dom.find(string.hexdigits) > 0,
            'should have printed hex digits'
        )

        support.run_command('close')
