export default function SizeRadioButton({ size }: { size: string }) {
	return (
		<>
			<input
				type="radio"
				id={size}
				name="size"
				value={size}
				className="hidden peer"
			/>
			<label htmlFor={size} className="size-radio-label">
				{size}
			</label>
		</>
	);
}
