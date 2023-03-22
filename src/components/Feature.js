function Feature({ image, title, text }) {
    return (
        <div class="feature-item">
            <img src={image} alt="Chat Icon" class="feature-icon" />
            <h3 class="feature-item-title">{title}</h3>
            <p>
                {text}
            </p>
        </div>
    )
}
export default Feature;