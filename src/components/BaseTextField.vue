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

    <div v-if="prefixIcon" class="base-text-field__prefix">
      <base-icon :icon="prefixIcon" />
    </div>
  </div>

</template>
<script>
import {ref, computed, watch} from "vue";
import BaseIcon from "@/components/BaseIcon";

export default {
  name: 'BaseTextField',
  components: {BaseIcon},
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
    },
    prefixIcon: {
      type: String,
      default: null
    }
  },

  setup(props) {
    let model = ref(null)
    const classes = computed(() => ({
      'base-text-field': true,
      'base-text-field--has-value': model.value,
      'base-text-field--has-prefix': props.prefixIcon
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
$defaultHeight: 56px;
$defaultPadding: 12px;
$denseHeight: 32px;

.base-text-field {
  position: relative;
  height: $defaultHeight;
  max-width: 496px;

  &__label {
    position: absolute;
    left: $defaultPadding;
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

    padding: 0 $defaultPadding;
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

      & ~ .base-text-field__prefix {
        border-color: $color-primary;
      }
    }

    &:placeholder-shown + .base-text-field__label {
      @extend .base-text-field__label--focused;
    }
  }

  &__prefix {
    width: $defaultHeight;
    height: $defaultHeight;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    left: 0;
    top: 0;

    background: $background-form;
    border: 1px solid $color-secondary;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;

    .base-icon {
      fill: $color-primary;
    }
  }

  &--has-value {
    .base-text-field__label {
      @extend .base-text-field__label--focused;
    }
  }

  &--has-prefix {
    width: calc(100% - #{$defaultHeight});

    .base-text-field__input {
      padding-left: calc(#{$defaultHeight} + #{$defaultPadding});
    }

    .base-text-field__label {
      left: calc(#{$defaultHeight} + #{$defaultPadding});
    }
  }
}


</style>