from django.core.exceptions import ValidationError

class PinNumericValidator:

    def validate(self, password, user=None):
        if not password.isdigit():
            raise ValidationError("Password must contain only digits.")

    def get_help_text(self):
        return "Your password must contain only digits."

class PinLengthValidator:

    def validate(self, password, user=None):
        if len(password) != 4:
            raise ValidationError("Password must be of length 4.")

    def get_help_text(self):
        return "Your password must be of length 4."
