<script>
    export let type;
    export let value = "";
    export let name;
    export let placeholder;
    placeholder = capitalize(placeholder)
    function capitalize(word) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
    const handleInput = e => {
    // in here, you can switch on type and implement
    // whatever behaviour you need
    value = type.match(/^(number|range)$/)
      ? +e.target.value
      : e.target.value;
  };
</script>
<label for="{name}" class="mr-auto py-2 px-1 my-2">{placeholder}</label>
<input {type} {value} on:input={handleInput} placeholder="{placeholder}" name="{name}" id="{name}" class="my-1 shadow">
<style>
    *:not(input){
        text-transform: capitalize;
    }
    input{
        width: 100%;
        border: 1px solid rgb(229,231,235);
        color: #596a73;
        padding: .5rem .75rem;
        border-radius: .25rem;
    }
    input:focus{
        outline: none;
    }
</style>