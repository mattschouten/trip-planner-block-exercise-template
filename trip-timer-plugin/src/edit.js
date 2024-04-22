/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	InspectorControls,
} from "@wordpress/block-editor";
import {
	TextControl,
	PanelBody,
} from "@wordpress/components";
import { useState } from "react";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";
import TimerPreview from "./preview";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { tripName, tripTime } = attributes;
	const [title, setTripTitle] = useState(tripName);
	const [time, setTripTime] = useState(tripTime);
	const blockProps = useBlockProps();

	function updateTitle(value) {
		setTripTitle(value);
		setAttributes({ tripName: value });
	}

	function updateTripTime(tripTime) {
		setAttributes({ tripTime: tripTime });
		setTripTime(tripTime);
	}

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody title={__("Settings")}>
					<TextControl
						label="Trip Name"
						value={title}
						placeholder="Enter trip name"
						onChange={updateTitle}
					/>
					<TextControl
						label="Trip Time"
						value={time}
						placeholder="Enter trip time"
						onChange={updateTripTime}
						type="time"
					/>
				</PanelBody>
			</InspectorControls>
			<TimerPreview
				tripName={tripName}
				tripTime={tripTime}
				setTripName={updateTitle}
				updateTripTime={updateTripTime}
			/>
		</div>
	);
}
