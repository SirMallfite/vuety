<template>
  <div :class="classes">
    <input
        :value="model"
        :placeholder="placeholder"
        :type="type"
        class="base-text-field__input"
        @input="onInput"
        @keypress="onKeyPress"
    />
    <label v-if="label" class="base-text-field__label">{{ label }}</label>
  </div>

</template>
<script>
import {ref, computed, watch} from "vue";

export default {
  name: 'BaseTextField',
  props: {
    label: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    value: {
      type: [String, Number],
      default: null
    },
    type: {
      type: String,
      default: 'text'
    }
  },

  setup(props) {
    let model = ref(null)
    const classes = computed(() => ({
      'base-text-field': true,
      'base-text-field--has-value': model.value
    }))

    const onInput = $event => {
      model.value = $event.currentTarget.value
    }

    const onKeyPress = $event => {
      // fix firefox number type issue
      if (props.type === 'number') {
        const regex = /[0-9]|\./;
        const value = String.fromCharCode($event.keyCode || $event.which);

        if (!regex.test(value)) {
          $event.returnValue = false;
          if ($event.preventDefault) $event.preventDefault();
        }
      }
    }

    watch(() => props.value, value => {
      model.value = value
    }, {immediate: true})


    return {model, classes, onInput, onKeyPress}
  }
}
</script>
<style scoped lang="scss">

.base-text-field {
  position: relative;
  height: 56px;
  max-width: 496px;
  box-sizing: border-box;

  &__label {
    position: absolute;
    left: 12px;
    top: 16px;

    font-size: 16px;
    line-height: 24px;
    letter-spacing: 1px;
    color: $color-secondary;

    pointer-events: none;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    -moz-transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    -webkit-transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    transform-origin: top left;

    &--focused {
      color: $color-primary;
      padding: 0 8px;
      transform: translateY(-26px) translateX(-6px) scale(0.75);
      background: linear-gradient(to bottom, transparent 54%, $background-white 54% 62%, transparent 62%);
    }
  }

  &__input {
    width: 100%;
    height: 100%;

    padding: 0 12px;
    border-radius: 4px;

    outline: none;
    font-size: 16px;
    color: $color-primary;
    background: $background-white;
    border: 1px solid $color-secondary;

    &::-ms-clear {
      display: none;
    }

    &::placeholder {
      font-size: 16px;
    }

    &[type=number]::-webkit-outer-spin-button,
    &[type=number]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type=number] {
      -moz-appearance:textfield;
    }

    &:focus {
      border-color: $color-primary;

      & ~ .base-text-field__label {
        @extend .base-text-field__label--focused;
      }
    }

    &:placeholder-shown + .base-text-field__label {
      @extend .base-text-field__label--focused;
    }
  }

  &--has-value {
    .base-text-field__label {
      @extend .base-text-field__label--focused;
    }
  }
}


</style>