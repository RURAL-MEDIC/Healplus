export default function MapPage() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>Nabha, Punjab</h2>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d27536.8217616567!2d76.12619774257169!3d30.376440926946568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sNabha%20hospitals!5e0!3m2!1sen!2sin!4v1758436131695!5m2!1sen!2sin"
        width="100%"
        height="500"
        style={{ border: 0, borderRadius: "12px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

