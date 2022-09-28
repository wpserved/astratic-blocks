const {useBlockProps, RichText} = wp.blockEditor;

const save = ({ attributes: {text, numberOfButtons}}) => {

  const Items = () => {
    const accordeons = [];

    for (let i=0; i<numberOfButtons; i++) {
      accordeons.push(
        <div className="wp-block-astratic-accordeons__item">
          <RichText.Content
            value={text[i].button}
            tagName="button"
          />
        </div>
      )
    }

    return accordeons;
  }

  return (
    <>
      <div 
        {...useBlockProps.save({
          className: "wp-block-astratic-accordeons"
        })}
       aria-hidden
      >
        <Items />
      </div>
    </>
  )
}

export default save;