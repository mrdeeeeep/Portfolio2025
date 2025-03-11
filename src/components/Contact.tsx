import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSending(false);
      setSent(true);
      toast.success("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");

      setTimeout(() => {
        setSent(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out if you have any questions or opportunities
          </p>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Let's connect! I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Contact Information</h3>

            <div className="flex flex-wrap gap-12 w-full justify-center">
              <div className="flex items-start space-x-4 w-full lg:w-auto">
                <div className="flex-shrink-0 bg-accent/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Phone</h4>
                  <p className="text-muted-foreground">+91 847 381 2601</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 w-full lg:w-auto">
                <div className="flex-shrink-0 bg-accent/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <p className="text-muted-foreground">de3p.me@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 w-full lg:w-auto">
                <div className="flex-shrink-0 bg-accent/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Location</h4>
                  <p className="text-muted-foreground">Kokrajhar, Assam, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;