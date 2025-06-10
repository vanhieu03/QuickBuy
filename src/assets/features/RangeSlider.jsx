import { useState } from "react"
import { Range } from "react-range";

//component render Range Slider
const RangeSlider = ({onValuesChange}) => {
    //Mảng giá trị giá hiện tại
    const [values, setValues] = useState([100, 800]);
    return (
        <Range
            label="Select your value"
            step={1}
            min={10}
            max={1000}
            values={values}
            onChange={(values) => {
                setValues(values); 
                onValuesChange(values);
            }}
            // Nền trượt
            renderTrack={({ props, children }) => (
                <div
                    {...props}
                    className="rounded-xl"
                    style={{
                        ...props.style,
                        height: "6px",
                        width: "100%",
                        backgroundColor: "#D1D5DB",
                    }}
                >
                    {children}
                </div>
            )}
            // nút kéo
            renderThumb={({ props, index }) => (
                <div
                    {...props}
                    key={props.key}
                    className="relative rounded-full"
                    style={{
                        ...props.style,
                        height: "20px",
                        width: "20px",
                        backgroundColor: "#000",
                    }}
                >
                    <div className="absolute top-1/2 left-1/2 translate-y-1/2 -translate-x-1/2 text-black">${values[index]}</div>
                </div>
            )}
        />
    )
}

export default RangeSlider