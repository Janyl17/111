Feature: Table

  Scenario: Table sorting

    Given I am on the table page
    When I click on Due title
    Then I see that first in column have $50.00
