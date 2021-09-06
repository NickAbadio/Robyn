function Quotes() {
  return (
    <div className="gray-container">
      <div className="container">
        <ul>
          <li>
            <figure>
              <img src="images/user1.png" alt="user testimonial" />
              <blockquote>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                non fermentum nunc.
              </blockquote>
              <figcaption>- Jane Doe</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src="images/user2.png" alt="user testimonial" />
              <blockquote>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                non fermentum nunc.
              </blockquote>
              <figcaption>- Jane Doe</figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Quotes;
