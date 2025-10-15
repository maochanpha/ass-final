import { Footer, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { motion } from "framer-motion";

export default function ModernFooter() {
  return (
    <motion.footer initial={{ opacity: 0, y: 40 }}whileInView={{ opacity: 1, y: 0 }}transition={{ duration: 0.8, ease: "easeOut" }}viewport={{ once: true }}>

      <Footer container={false} className="bg-gradient-to-b from-gray-900 to-black text-gray-300 ">
      
        <div className="mx-auto w-full max-w-7xl px-6 py-12">
          {/* Top Grid Section */}
          <motion.div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-5" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}viewport={{ once: true }}>
            
            {/* Company */}
            <div>
              <FooterTitle title="Company" className="text-white text-lg font-semibold mb-4" />
              <FooterLinkGroup col>
                {["About Us", "Careers", "Press", "Blog"].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, x: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <FooterLink href="#" className="hover:text-white transition-colors">{item}</FooterLink>
                  </motion.div>
                ))}
              </FooterLinkGroup>
            </div>

            {/* Support */}
            <div>
              <FooterTitle title="Support" className="text-white text-lg font-semibold mb-4" />
              <FooterLinkGroup col>
                {["Help Center", "Contact Us", "FAQs", "Live Chat"].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, x: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <FooterLink href="#" className="hover:text-white transition-colors">{item}</FooterLink>
                  </motion.div>
                ))}
              </FooterLinkGroup>
            </div>

            {/* Legal */}
            <div>
              <FooterTitle title="Legal" className="text-white text-lg font-semibold mb-4" />
              <FooterLinkGroup col>
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, x: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <FooterLink href="#" className="hover:text-white transition-colors">{item}</FooterLink>
                  </motion.div>
                ))}
              </FooterLinkGroup>
            </div>

            {/* Cars */}
            <div>
              <FooterTitle title="Modern Cars" className="text-white text-lg font-semibold mb-4" />
              <FooterLinkGroup col>
                {["BMW", "Ferrari", "Tesla", "Porsche"].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, x: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <FooterLink href="#" className="hover:text-white transition-colors">{item}</FooterLink>
                  </motion.div>
                ))}
              </FooterLinkGroup>
            </div>

            {/* Downloads */}
            <div>
              <FooterTitle title="Download" className="text-white text-lg font-semibold mb-4" />
              <FooterLinkGroup col>
                {["iOS", "Android", "Windows", "MacOS"].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, x: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <FooterLink href="#" className="hover:text-white transition-colors">{item}</FooterLink>
                  </motion.div>
                ))}
              </FooterLinkGroup>
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            className="my-8 border-t border-gray-700"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          ></motion.div>

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
              {[BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble].map((Icon, i) => (
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
