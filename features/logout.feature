Feature: Log out

@focus 
    Scenario Outline: Succesful logout
        Given User launched eshop login page
        When User logged in eshop using the valid emailid "<EmailID>" and the valid password "<Password>"
        And User is logged in
        And User clicks on logout button
        Then User is logged out

        Examples:
        | EmailID                    | Password  |
        | test@mydomain.com | Test@123 |
