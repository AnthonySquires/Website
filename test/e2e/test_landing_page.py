import re

from playwright.sync_api import Page, expect


def test_homepage_title(page: Page, http_server: str):
    """Test that the homepage has the correct title."""
    page.goto(http_server)
    expect(page).to_have_title(re.compile(r'^anthony squires - software developer$', re.IGNORECASE))
