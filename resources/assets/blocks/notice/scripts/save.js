const { useInnerBlocksProps, useBlockProps } = wp.blockEditor;

export default function save({attributes: { tagName: Tag, noticeReload, noticeId}}) {

  let closeButton;

  if (noticeReload > 0) {
    closeButton = <button className="wp-block-notice__button-close wp-block-notice__button-close-front">&times;</button>;
  }

  return (
    <div className="wp-block-notice" data-reload={noticeReload} data-notice-id={noticeId}>
      <Tag { ...useInnerBlocksProps.save( useBlockProps.save() ) } />

      {closeButton}
    </div>
  )
}