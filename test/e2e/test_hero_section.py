import re

from playwright.sync_api import Page, expect

EXPECTED_SECTIONS = [
    (re.compile(r'^full-stack development', re.IGNORECASE), re.compile(r'^Experienced in building', re.IGNORECASE)),
]


def test_hero_section_visible(page: Page, http_server: str):
    """Test that the hero section is visible."""
    page.goto(http_server)

    hero_section_header = page.get_by_role('heading', name='Anthony Squires')
    expect(hero_section_header).to_be_visible()


def test_hero_section_points(page: Page, http_server: str):
    """ Tests that all the expected points are rendered in the hero section """

    page.goto(http_server)

    for expected_tag, expected_desc in EXPECTED_SECTIONS:
        print(expected_tag, expected_desc)
