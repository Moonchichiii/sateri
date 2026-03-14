from django.test import TestCase

from .models import User


class UserManagerTests(TestCase):
    def test_create_user(self):
        user = User.objects.create_user(
            email="user@example.com",
            password="strong-pass-123",
            first_name="Jane",
            last_name="Doe",
        )

        self.assertEqual(user.email, "user@example.com")
        self.assertTrue(user.check_password("strong-pass-123"))
        self.assertFalse(user.is_staff)
        self.assertFalse(user.is_superuser)

    def test_email_normalization(self):
        user = User.objects.create_user(
            email="User@EXAMPLE.COM",
            password="strong-pass-123",
            first_name="John",
            last_name="Doe",
        )

        self.assertEqual(user.email, "User@example.com")

    def test_create_superuser(self):
        user = User.objects.create_superuser(
            email="admin@example.com",
            password="strong-pass-123",
            first_name="Admin",
            last_name="User",
        )

        self.assertTrue(user.is_staff)
        self.assertTrue(user.is_superuser)
        self.assertTrue(user.is_active)
