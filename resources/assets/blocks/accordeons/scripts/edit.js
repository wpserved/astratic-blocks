const {__} = wp.i18n;
const {
  useBlockProps,
  RichText,
  BlockControls,
  AlignmentToolbar
} = wp.blockEditor;

const edit = ( props ) => {
  const {attributes, setAttributes} = props;
  const {numberOfButtons, text} = attributes;

  const onChangeButtonText = (newText, i) => {
    const updatedText = text.map((value, index) => i === index ? {button: newText} : value)
    setAttributes({text: updatedText})
  }

  const onChangeText = (newText, i) => {
    const updatedText = text.map((value, index) => i === index ? {button: newText} : value)
    setAttributes({text: updatedText})
  }

  return (
    <>
      <div
        {...useBlockProps({
          className: "wp-block-astratic-accordeons"
        })}
      >
        {(() => {
          const accordeons = [];

          for (let i=0; i<numberOfButtons; i++) {
            const buttonValue = text[i].button;
            const textValue = text[i].text;
      
            accordeons.push(
              <div className="wp-block-astratic-accordeons__item">
                <RichText
                  onChange={(newText) => onChangeButtonText(newText, i)}
                  value={buttonValue}
                  placeholder={__('Button title...', 'astratic-blocks')}
                  tagName="button"
                />

                <RichText
                  onChange={(newText) => onChangeText(newText, i)}
                  value={textValue}
                  placeholder={__('Text Content...', 'astratic-blocks')}
                  tagName="div"
                />
              </div>
            )
          }

          return accordeons;
        })()}
      </div>
    </>
  )
}

export default edit;
