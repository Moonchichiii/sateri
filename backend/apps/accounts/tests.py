from django.test import TestCase

from apps.accounts.models import User


class UserModelTests(TestCase):
    def test_create_user(self):
        user = User.objects.create_user(
            email="test@example.com",
            password="strong-pass-123",
            first_name="Mats",
            last_name="Gustafsson",
        )

        self.assertEqual(user.email, "test@example.com")
        self.assertTrue(user.check_password("strong-pass-123"))
        self.assertFalse(user.is_staff)
        self.assertFalse(user.is_superuser)

    def test_email_normalization(self):
        user = User.objects.create_user(
            email="Test@Example.COM",
            password="strong-pass-123",
            first_name="Mats",
            last_name="Gustafsson",
        )

        self.assertEqual(user.email, "Test@example.com")

    def test_create_superuser(self):
        admin_user = User.objects.create_superuser(
            email="admin@example.com",
            password="strong-pass-123",
            first_name="Admin",
            last_name="User",
        )

        self.assertTrue(admin_user.is_staff)
        self.assertTrue(admin_user.is_superuser)
        self.assertTrue(admin_user.is_active)