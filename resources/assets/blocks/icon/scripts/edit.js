import icon from './icon';

const { __ } = wp.i18n;

const {
    
} = wp;

const {
  InspectorControls,
  useBlockProps,
  MediaUpload,
  MediaUploadCheck,
  BlockControls,
} = wp.blockEditor;

const {
    useState,
    Fragment,
} = wp.element;

const {
  PanelBody,
  RangeControl,
  Button,
  Placeholder
} = wp.components;

export default function edit({attributes, setAttributes}) {
    const { width, mediaId, mediaUrl } = attributes;

    const blockProps = useBlockProps({
        style: {
            width: width
        }
    });

    const onSelectMedia = (media) => {
        setAttributes({
            mediaId: media.id,
            mediaUrl: media.url
        });
    };

    return (
        <Fragment>
            <InspectorControls>
                <PanelBody title={__('Icon Settings', 'astratic-blocks')}>
                    <RangeControl 
                        value={ width }
                        label={__('Width', 'astratic-blocks')}
                        min={0}
                        max={1000}
                        suffix="px"
                        onChange={(newValue) => {
                            setAttributes({width: newValue});
                        }}
                        renderTooltipContent={(newValue) => `${newValue}px`}
                    />
                </PanelBody>
            </InspectorControls>

            {mediaId == 0 &&
                <Placeholder icon={ icon } label={__('Astratic Blocks: Icon', 'astratic-blocks')} instructions={__('Select icon.', 'astratic-blocks')}>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={onSelectMedia}
                            value={mediaId}
                            allowedTypes={['image']}
                            render={({ open } ) => (
                                <Button onClick={ open } variant="primary">{__('Select Icon from Media Library', 'astratic-block')}</Button>
                            )}
                        />
                    </MediaUploadCheck>
                </Placeholder>
            }
            {mediaId != 0 &&
                <Fragment>
                    <BlockControls>
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={onSelectMedia}
                                value={mediaId}
                                allowedTypes={['image']}
                                render={({ open } ) => (
                                    <Button onClick={ open } isLink>{__('Replace icon', 'astratic-blocks')}</Button>
                                )}
                            />
                        </MediaUploadCheck>
                    </BlockControls>
                    <div {...blockProps}>
                        <svg version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <g fill-rule="evenodd">
                                <g transform="translate(.1 .1)">
                                    <path id="a" d="m17.8 1.4c0.4 0 0.8 0.4 0.8 0.8v15.7c0 0.4-0.4 0.8-0.8 0.8h-15.6c-0.4 0-0.8-0.4-0.8-0.8v-15.7c0-0.4 0.4-0.8 0.8-0.8h15.6m0-1.4h-15.6c-1.2 0-2.2 1-2.2 2.2v15.7c0 1.2 1 2.2 2.2 2.2h15.7c1.2 0 2.2-1 2.2-2.2v-15.7c-0.1-1.2-1.1-2.2-2.3-2.2z" fill-rule="nonzero"/>
                                    <path d="m21.6 14.8c0.4 0 0.8 0.4 0.8 0.8v6c0 0.4-0.4 0.8-0.8 0.8h-6c-0.4 0-0.8-0.4-0.8-0.8v-6c0-0.4 0.4-0.8 0.8-0.8h6m0-1.4h-6c-1.2 0-2.2 1-2.2 2.2v6c0 1.2 1 2.2 2.2 2.2h6c1.2 0 2.2-1 2.2-2.2v-6c0-1.2-1-2.2-2.2-2.2z" fill-rule="nonzero"/>
                                    <g transform="translate(5.1 5.1)" stroke="#6835CC" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4">
                                        <line id="Path" x1="9.7" x2=".2" y1=".1" y2="9.6"/>
                                        <polyline id="b" points="9.8 3.9 9.8 -8.8818e-16 5.9 -8.8818e-16"/>
                                        <polyline points="-8.8818e-16 5.9 -8.8818e-16 9.8 3.9 9.8"/>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                </Fragment>
            }
        </Fragment>
    )
}