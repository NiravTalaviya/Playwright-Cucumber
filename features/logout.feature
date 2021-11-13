Feature: Log out

    Scenario Outline: Succesful logout longer version
        Given User launched eshop login page
        When User logged in eshop using the valid emailid "<EmailID>" and the valid password "<Password>"
        And User is logged in successfully
        And User clicks on logout button
        Then User is logged out

        Examples:
        | EmailID                    | Password  |
        | test@mydomain.com | Test@123 |
@focus 
    Scenario Outline: Succesful logout shorter version
        Given User is already logged in
        And User clicks on logout button
        Then User is logged out