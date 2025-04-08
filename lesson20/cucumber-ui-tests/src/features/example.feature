Feature: Login to application

  Scenario: Successful login with valid credentials
    Given I open the login page
    When I enter valid credentials
    Then I should be logged in successfully

  Scenario: Failed login with invalid credentials
    Given I open the login page
    When I enter invalid credentials
    Then I should see an error message