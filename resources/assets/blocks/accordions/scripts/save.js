const {useBlockProps, RichText} = wp.blockEditor;

const save = ({ attributes: {text, numberOfButtons}}) => {

  const Items = () => {
    const accordions = [];

    for (let i=0; i<numberOfButtons; i++) {
      accordions.push(
        <div className="wp-block-astratic-accordeons__item">
          <RichText.Content
            value={text[i]}
            tagName="button"
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
       aria-hidden
      >
        <Items />
      </div>
    </>
  )
}

export default save;