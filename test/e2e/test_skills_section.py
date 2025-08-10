import re

from playwright.sync_api import Page, expect

EXPECTED_SKILLS = [
    (
        re.compile('^programming languages', re.IGNORECASE),
        [
            'C++',
            re.compile('^C$'),
            'Python',
        ],
    ),
    (
        re.compile('^Frameworks', re.IGNORECASE),
        [
            'TensorRT',
            'PlayWright',
            'React',
        ],
    ),
    (
        re.compile('^Tools', re.IGNORECASE),
        [
            'JIRA',
            'Confluence',
            'Azure',
        ],
    ),
]


def test_skills_section_visible(page: Page, http_server: str):
    """Test that the skills section is visible."""
    page.goto(http_server)

    skills_section_header = page.get_by_role('heading', name='Skills')
    expect(skills_section_header).to_be_visible()


def test_skills_section_chips(page: Page, http_server: str):
    """ Tests that all the expected points are rendered in the hero section """

    page.goto(http_server)

    for section_title, expected_items in EXPECTED_SKILLS:
        section = page.get_by_role('region', name=section_title)
        expect(section).to_be_visible()

        for expected_item in expected_items:
            item = section.get_by_role('listitem', name=expected_item)
            expect(item).to_be_visible()


def test_skills_professional_toggle(page: Page, http_server: str):
    """ Validates that the professional toggle hides the expected items """

    page.goto(http_server)

    section = page.get_by_role('region', name=re.compile('^frameworks', re.IGNORECASE))
    expect(section).to_be_visible()

    hass_item = section.get_by_role('listitem', name='HomeAssistant')
    expect(hass_item).to_be_visible()

    toggle = page.get_by_role('checkbox', name=re.compile('^Show skills with professional', re.IGNORECASE))
    expect(toggle).to_be_enabled()

    toggle.click()

    expect(hass_item).not_to_be_visible()
