"use client";

import { useTranslation } from "@/app/i18n/client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { sendMessageToSlack } from "@/utils/contact-utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react"; // Add this import
import { Spinner } from "@/components/ui/spinner";

export default function ContactSection({ lng }: { lng: string }) {
  const { t } = useTranslation(lng);
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false); // Add this state

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Validation for non-empty fields
    if (!name || !email || !message) {
      toast({
        title: t("contact.validationErrorTitle"),
        description: t("contact.validationErrorDescription"),
        variant: "destructive",
      });
      setIsLoading(false); // Reset loading state
      return;
    }

    const slackMessage = `New contact request received!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
    try {
      await sendMessageToSlack(slackMessage);
      toast({
        title: t("contact.successTitle"),
        description: t("contact.successDescription"),
        variant: "default",
        duration: 5000,
      });

      form.reset(); // Clear the form if successful
    } catch (error) {
      toast({
        title: t("contact.errorTitle"),
        description: t("contact.errorDescription"),
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-12 px-0 lg:px-32 md:py-16 mt-16 gradient-background-top border-t-2 border-white/20"
    >
      <div className="container px-4 md:px-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {t("contact.getInTouch")}
            </h1>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {t("contact.contactDescription")}
            </p>
          </div>
          <form className="space-y-4" onSubmit={submit}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="space-y-2 col-span-1">
                <Label htmlFor="name">{t("contact.name")}</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder={t("contact.namePlaceholder")}
                  disabled={isLoading} // Disable input when loading
                />
              </div>
              <div className="space-y-2 col-span-2">
                <Label htmlFor="email">{t("contact.email")}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t("contact.emailPlaceholder")}
                  disabled={isLoading} // Disable input when loading
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">{t("contact.message")}</Label>
              <Textarea
                id="message"
                name="message"
                placeholder={t("contact.messagePlaceholder")}
                className="min-h-[120px]"
                disabled={isLoading} // Disable textarea when loading
              />
            </div>
            <Button variant="default" disabled={isLoading}>
              {isLoading ? (
                <Spinner className="w-4 h-4" />
              ) : (
                t("contact.submit")
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
