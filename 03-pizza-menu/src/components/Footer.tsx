function Footer() {
  const hour: number = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen: boolean = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit us or order</p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}

export default Footer;
