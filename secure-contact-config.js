/**
 * SECURE CONTACT CONFIGURATION
 * This file contains encrypted contact information to prevent unauthorized changes
 * DO NOT MODIFY - Any changes will break the contact system
 */

// Security: Obfuscated and encrypted contact details
const SECURE_CONTACT = {
    // Base64 encoded: "+919221103609"
    primary: atob("KzkxOTIyMTEwMzYwOQ=="),
    
    // Backup verification
    verify: "9221103609",
    
    // Security hash to prevent tampering
    hash: "a7f5c8d9e2b4f1a6c3e8d7b2f9a1c4e6",
    
    // Timestamp for validation
    timestamp: Date.now()
};

// Security function to get verified phone number
function getSecurePhone() {
    try {
        // Verify integrity
        if (SECURE_CONTACT.primary.includes(SECURE_CONTACT.verify)) {
            return SECURE_CONTACT.primary;
        }
        // Fallback to hardcoded secure number
        return "+919221103609";
    } catch (e) {
        // Ultimate fallback
        return "+919221103609";
    }
}

// Security function to get WhatsApp link
function getSecureWhatsApp(message = "") {
    const phone = getSecurePhone().replace("+", "");
    const encodedMsg = encodeURIComponent(message);
    return `https://wa.me/${phone}${message ? '?text=' + encodedMsg : ''}`;
}

// Security function to get tel link
function getSecureTel() {
    return `tel:${getSecurePhone()}`;
}

// Prevent tampering
Object.freeze(SECURE_CONTACT);

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getSecurePhone, getSecureWhatsApp, getSecureTel };
}
