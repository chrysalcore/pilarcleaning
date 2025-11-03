function FAQItem({ id, question, answer, active, setId }) {
    const handleClick = () => {
        if(active) {
            setId(0)
        } else setId(id)
    }

    return (
        <button className={`faq-item ${active? 'active' : ''}`} onClick={handleClick}>
            <h3 className='faq-item__quest'>{question}</h3>
            <p className="faq-item__answ">{answer}</p>
        </button>
    )
}

export default FAQItem