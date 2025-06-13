export default function Question({faq}) {
    return(
        <div className="collapse bg-base-100 border border-base-300">
            <input type="radio" name="about-questions"/>
            <div className="collapse-title font-semibold">{faq.question}</div>
            <div className="collapse-content text-sm">{faq.answer}</div>
        </div>
    )
}