import re

from playwright.sync_api import Page, expect

EXPECTED_SECTIONS = [
    (re.compile(r'^full-stack development', re.IGNORECASE), re.compile(r'^Experienced in building', re.IGNORECASE)),
]


def test_skills_section_visible(page: Page, http_server: str):
    """Test that the skills section is visible."""
    page.goto(http_server)

    skills_section_header = page.get_by_role('heading', name='Skills')
    expect(skills_section_header).to_be_visible()


def test_skills_section_chips(page: Page, http_server: str):
    """ Tests that all the expected points are rendered in the hero section """

    page.goto(http_server)
