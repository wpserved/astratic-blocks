const {useBlockProps, RichText} = wp.blockEditor;

const save = ({ attributes: {numberOfButtons, buttons, text}}) => {

  const Items = () => {
    const accordions = [];

    for (let i=0; i<numberOfButtons; i++) {
      accordions.push(
        <div className="wp-block-astratic-accordeons__item">
          <RichText.Content
            value={buttons[i]}
            tagName="button"
            id={`accordion-control-${i}`}
            className="wp-block-astratic-accordions__item-toggler"
            aria-controls={`accordion-${i}`}
            aria-expanded="false"
            data-accordion-toggler
          />

          <RichText.Content
            value={text[i]}
            tagName="div"
            id={`accordion-${i}`}
            className="wp-block-astratic-accordions__item-content"
            aria-hidden="true"
            aria-labelledby={`accordion-control-${i}`}
            data-accordion-content
          />
        </div>
      )
    }

    return accordions;
  }

  return (
    <>
      <div 
        {...useBlockProps.save({
          className: "wp-block-astratic-accordions"
        })}
        data-block-accordions
      >
        <Items />
      </div>
    </>
  )
}

export default save;