import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "@mui/material";

const defaultValues = {
  name: "",
  Location: ""
};

const GooglePlaceAutocomplete = ({
  name,
  setLatitude,
  setLongitude,
  setPlaceName
}) => {
  const {
    ready,
    value,
    suggestions,
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete({
    requestOptions: {},
    debounce: 300
  });
  const {
    control,
    formState: { errors }
  } = useFormContext();

  const ref2 = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleSelect = ({ description }) => () => {
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter to "false"
    setValue(description, false);
    console.log("description", description);
    setPlaceName(description);
    clearSuggestions();

    // Get latitude and longitude via utility functions
    getGeocode({ address: description })
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        console.log("📍 Coordinates: ", { lat, lng });
        setLatitude(lat);
        setLongitude(lng);
      })
      .catch((error) => {
        console.log("😱 Error: ", error);
      });
  };

  const renderSuggestions = () =>
    suggestions.data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text }
      } = suggestion;

      return (
        <li key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });
  return (
    <div ref={ref2}>
      <Controller
        name={name}
        // rules={{ required: 'storyLocation is Required' }}
        control={control}
        // defaultValue=""
        render={({ field: { onChange, ref } }) => (
          <TextField
            fullWidth
            type="text"
            label={name}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            ref={ref}
            placeholder={name}
            register
            value={value}
            onChange={(e) => onChange(setValue(e.target.value))}
            disabled={!ready}
            // error={Boolean(errors && errors[name])}
            // helperText={errors && errors[name]?.message}
          />
        )}
      />

      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {suggestions.status === "OK" && <ul>{renderSuggestions()}</ul>}
    </div>
  );
};
