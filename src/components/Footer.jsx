import {
  Footer,
  FooterCopyright,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { motion } from "framer-motion";

export default function ModernFooter() {
  const sections = [
    { title: "Company", items: ["About Us", "Careers", "Press", "Blog"] },
    {
      title: "Support",
      items: ["Help Center", "Contact Us", "FAQs", "Live Chat"],
    },
    {
      title: "Legal",
      items: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
    },
    { title: "Modern Cars", items: ["BMW", "Ferrari", "Tesla", "Porsche"] },
    { title: "Download", items: ["iOS", "Android", "Windows", "MacOS"] },
  ];

  const socialIcons = [
    BsFacebook,
    BsInstagram,
    BsTwitter,
    BsGithub,
    BsDribbble,
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Footer
        container={false}
        className="bg-gradient-to-b from-gray-900 to-black text-gray-300"
      >
        <div className="mx-auto w-full max-w-8xl px-6 py-12">
          {/* Top Grid Section */}
          <motion.div
            className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {sections.map((section, idx) => (
              <div key={idx}>
                <FooterTitle
                  title={section.title}
                  className="text-white text-lg font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400"
                />
                <FooterLinkGroup col>
                  {section.items.map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05, x: 5 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <FooterLink
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        {item}
                      </FooterLink>
                    </motion.div>
                  ))}
                </FooterLinkGroup>
              </div>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            className="my-8 border-t border-gray-700"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

          {/* Bottom Bar */}
          <motion.div
            className="flex flex-col items-center justify-between space-y-6 sm:flex-row sm:space-y-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-sm text-gray-400">
              <FooterCopyright href="#" by="ModernCars™" year={2025} />
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6">
              {socialIcons.map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.3, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FooterIcon
                    href="#"
                    icon={Icon}
                    className="hover:text-white text-gray-400 transition-all"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Footer>
    </motion.footer>
  );
}
