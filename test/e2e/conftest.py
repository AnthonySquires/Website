import http.server
import socketserver
import threading
import time
from pathlib import Path

import pytest


PORT = 8000
DIRECTORY = str(Path(__file__).parents[2] / "dist")  # Assuming website is built to dist/

class Handler(http.server.SimpleHTTPRequestHandler):
    """ Handles serving static files from dist """

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)


@pytest.fixture(scope="session")
def http_server():
    """Fixture that starts a local HTTP server serving the built website."""

    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        # Start the server in a separate thread
        server_thread = threading.Thread(target=httpd.serve_forever)
        server_thread.daemon = True
        server_thread.start()

        # Wait a bit for the server to start
        time.sleep(1)

        yield f"http://localhost:{PORT}"

        # Cleanup
        httpd.shutdown()
        httpd.server_close()


@pytest.fixture(scope="session")
def browser_context_args(browser_context_args):
    """Fixture to set browser context arguments."""
    return {
        **browser_context_args,
        "viewport": {
            "width": 1920,
            "height": 1080,
        }
    }
