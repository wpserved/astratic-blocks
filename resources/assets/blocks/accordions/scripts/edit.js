const {__} = wp.i18n;
const {
  useBlockProps,
  RichText,
  BlockControls,
  InspectorControls
} = wp.blockEditor;
const {
  PanelBody,
  RangeControl,
  SelectControl 
} = wp.components;

const edit = ( props ) => {
  const {attributes, setAttributes} = props;
  const {numberOfButtons, buttons, text} = attributes;

  const onChangeButtonText = (newText, i) => {
    const updatedText = buttons.map((value, index) => i === index ? newText : value)
    setAttributes({buttons: updatedText})
  }

  const onChangeText = (newText, i) => {
    const updatedText = text.map((value, index) => i === index ? newText : value)
    setAttributes({text: updatedText})
  }

  return (
    <>
      <InspectorControls>
        <PanelBody title={__('Accordions Settings', 'astratic-blocks')}>
          <RangeControl
            label={__('Number of items')}
            value={numberOfButtons}
            min={1}
            max={20}
            step={1}
            onChange={ ( value ) => 
              setAttributes( { numberOfButtons: value } )
            }
          />
        </PanelBody>
      </InspectorControls>

      <div
        {...useBlockProps({
          className: "wp-block-astratic-accordions"
        })}
      >
        {(() => {
          const accordions = [];

          for (let i=0; i<numberOfButtons; i++) {
            const buttonValue = buttons[i];
            const textValue = text[i];
      
            accordions.push(
              <div className="wp-block-astratic-accordions__item">
                <RichText
                  onChange={(newText) => onChangeButtonText(newText, i)}
                  value={buttonValue}
                  placeholder={__('Button title...', 'astratic-blocks')}
                  tagName="div"
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

          return accordions;
        })()}
      </div>
    </>
  )
}

export default edit;
