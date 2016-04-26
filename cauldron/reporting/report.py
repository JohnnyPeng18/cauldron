from cauldron import render
from cauldron.session.caching import SharedCache


class Report(object):
    """
    A class for storing the elements of the
    """

    def __init__(self, identifier: str):
        self.id = identifier
        self.body = []
        self.data = SharedCache()
        self.files = SharedCache()

    def clear(self):
        self.body = []
        self.data = SharedCache()
        self.files = SharedCache()

    def header(self, level: int, text: str):
        """

        :param level:
        :param text:
        :return:
        """

        self.body.append(render.header(level, text))

    def text(self, text: str, preformatted: bool = False):
        """

        :param text:
        :param preformatted:
        :return:
        """

        if preformatted:
            result = render.preformatted_text(text)
        else:
            result = render.text(text)
        self.body.append(result)

    def markdown(self, source: str):
        """

        :param source:
        :return:
        """

        self.body.append(render.markdown(source))

    def json(self, window_key: str, data):
        """

        :param window_key:
        :param data:
        :return:
        """

        self.body.append(render.json(window_key, data))

    def add_html(self, content):
        """

        :param content:
        :return:
        """

        self.body.append(render.html(content))

    def plotly(self, data, layout):
        """

        :param data:
        :param layout:
        :return:
        """

        self.body.append(render.plotly(data, layout))

    def table(self, data_frame, scale: float = 0.7):
        """

        :param data_frame:
        :param scale:
        :return:
        """

        self.body.append(render.table(
            data_frame=data_frame,
            scale=scale
        ))

    def svg(self, svg: str, filename: str = None):
        """

        :param svg:
        :param filename:
        :return:
        """

        self.body.append(render.svg(svg))

        if not filename:
            return

        if not filename.endswith('.svg'):
            filename += '.svg'

        self.files[filename] = svg

    def jinja(self, path, **kwargs):
        """

        :param path:
        :param kwargs:
        :return:
        """

        self.body.append(render.jinja(path, **kwargs))

    def whitespace(self, lines: float = 1.0):
        """

        :param lines:
        :return:
        """

        self.body.append(render.whitespace(lines))

    def html(self, dom: str):
        """

        :param dom:
        :return:
        """

        self.body.append(render.html(dom))

