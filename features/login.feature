Feature: Login

  Scenario Outline: Login to the E-Shop Application with Correct Password
    Given User launched eshop login page
    When User logged in eshop using the valid emailid "<EmailID>" and the valid password "<Password>"
    Then User should be logged in

    Examples:
      | EmailID                    | Password  |
      | test@mydomain.com | Test@123 |

  Scenario Outline: Login to the E-Shop Application with Wrong Password
    Given User launched eshop login page
    When User logged in eshop using the invalid emailid "<EmailID>" and the invalid password "<Password>"
    Then User should fail

    Examples:
      | EmailID                    | Password  |
      | test@mydomain.com | Test@1234 |