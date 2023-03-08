const { useInnerBlocksProps, useBlockProps, RichText } = wp.blockEditor;

export default function save({ attributes: { tagName: Tag, text } }) {

  return (
    <>
      <div {...useBlockProps.save()}>
        <button className="wp-block-astratic-accordion__toggler">
          <RichText.Content
            value={text}
          />
        </button>

        <div className="wp-block-astratic-accordion__content">
          <Tag {...useInnerBlocksProps.save()} />
        </div>
      </div>
    </>
  )
}