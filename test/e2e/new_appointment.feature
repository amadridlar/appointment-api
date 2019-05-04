Feature: new patient appointment

    As a patient
    I want to make a new appointment
    So that reserve a date

    Scenario Outline: make appointment
        Given a new patient
            | name               | <name>     |
            | lastname           | <lastname> |
            | Address            | <address>  |
            | Phone number       | <phone>    |
            | Appointment date   | <date>     |
            | Appointment reason | <reason>   |
        When make the reservation
        Then the appointment is registered in the system
            | name               | <name>     |
            | lastname           | <lastname> |
            | Address            | <address>  |
            | Phone number       | <phone>    |
            | Appointment date   | <date>     |
            | Appointment reason | <reason>   |

        Examples:
            | name    | lastname        | address                                               | phone       | date         | reason         |
            | "Johny" | "Reland Jeremy" | "Calle Islas Nuevas, 3. 1 A. 28934. Alcorcón. Madrid" | "666555444" | "03-04-2019" | "Reason given" |

    Scenario: new appointment of a patient with another appointment already registered
        Given a patient with an appointment made
        When make the reservation
        Then the system register the appointment
        And the system advices that the patient has another appointment made
            | message | "Patient already has an appointment" |

    Scenario: reservation date is already occupied
        Given a new patient
            | name               | <name>     |
            | lastname           | <lastname> |
            | Address            | <address>  |
            | Phone number       | <phone>    |
            | Appointment date   | <date>     |
            | Appointment reason | <reason>   |

        And a date already reserved
            | Appointment date | <date> |

        When make the reservation
        But the reservation date is occupied
        Then the system informs me that that date is occupied
        And not modifies the given date
