const { useInnerBlocksProps, useBlockProps } = wp.blockEditor;

export default function save({attributes: { tagName: Tag, noticeReload, noticeId}}) {

  return (
    <div className="wp-block-notice" data-reload={noticeReload} data-notice-id={noticeId}>
      <Tag { ...useInnerBlocksProps.save( useBlockProps.save() ) } />

      <button className="wp-block-notice__button-close wp-block-notice__button-close-front">
        X
      </button>
    </div>
  )
}