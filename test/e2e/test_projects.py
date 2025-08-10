import re

from playwright.sync_api import Page, expect

EXPECTED_PROJECTS = [
    (
        re.compile('^this website$', re.IGNORECASE),
        re.compile(r'''^The website you're looking at''', re.IGNORECASE),
    ),
]


def test_project_section_visible(page: Page, http_server: str):
    """ Checks that the project section is visible """

    page.goto(http_server)

    heading = page.get_by_role('heading', name='Projects')
    expect(heading).to_be_visible()


def test_all_projects_visible(page: Page, http_server: str):
    """ Checks all projects visible """

    page.goto(http_server)

    for card_title, card_content in EXPECTED_PROJECTS:
        card = page.get_by_role('region', name=card_title)
        expect(card).to_be_visible()

        content = card.get_by_role('paragraph')
        expect(content).to_have_text(card_content)
