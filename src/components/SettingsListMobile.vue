<template>
  <section class="settings__list settings-list">
    <ul v-for="list in lists" :key="list" class="settings-list__section">
      <li v-for="item in list" :key="item.title" class="settings-list__item">
        <router-link class="settings-list__item-content" :to="item.route">
          <div class="settings-list__item-icon" :class="item.class">
            <base-icon :name="item.icon" size="18" />
          </div>
          <span class="settings-list__item-title">{{
            $filters.lang(item.title)
          }}</span>
          <span v-if="item.label" class="settings-list__item-label">
            {{ $filters.lang(item.label) }}
          </span>
          <base-icon
            name="chevron-right-solid"
            size="13"
            class="settings__chevron"
          />
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import BaseIcon from '@/components/BaseIcon.vue'

export default {
  components: {
    BaseIcon,
  },
  data: () => ({
    lists: [
      [
        {
          title: 'SETTINGS_BOARDS',
          route: '/settings/boards',
          icon: 'rectangles-mixed-regular',
          class: 'boards',
        },
        {
          title: 'SETTINGS_TODO_LISTS',
          route: '/settings/todo-lists',
          icon: 'list-check-regular',
          class: 'todolists',
        },
      ],
      [
        {
          title: 'SETTINGS_APPEARANCE',
          route: '/settings/appearance',
          icon: 'brightness-regular',
          class: 'appearance',
        },
        {
          title: 'SETTINGS_LANGUAGE',
          label: 'G_APP_CURRENT_LANGUAGE_NAME',
          route: '/settings/language',
          icon: 'globe-regular',
          class: 'language',
        },
      ],
      [
        {
          title: 'SETTINGS_SUPPORT',
          route: '/settings/support',
          icon: 'circle-question-regular',
          class: 'support',
        },
        {
          title: 'SETTINGS_TIMES_FEATURES',
          route: '/settings/times-features',
          icon: 'lightbulb-regular',
          class: 'features',
        },
        {
          title: 'SETTINGS_REPORT_A_BUG',
          route: '/settings/report-a-bug',
          icon: 'bug-regular',
          class: 'report',
        },
      ],
    ],
  }),
}
</script>

<style lang="scss">
.settings-list {
  margin-top: rem(15);
  user-select: none;

  &__section {
    border-radius: rem(12);
    background-color: #fff;
    overflow: hidden;

    &:not(:last-child) {
      margin-bottom: rem(10);
    }
  }

  &__item {
    position: relative;
    overflow: hidden;
    margin-top: rem(-1);

    &:not(:last-child):after {
      content: '';
      position: absolute;
      left: rem(52);
      bottom: 0;
      height: 1px;
      width: 100%;
      background-color: #e5e5e5;
    }
  }

  &__item-content {
    display: flex;
    align-items: center;
    width: 100%;
    padding: rem(7) rem(15) rem(7) rem(12);

    &:active {
      background-color: #e5e5e5;
    }
  }

  &__item-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: rem(30);
    height: rem(30);
    fill: #fff;
    border-radius: rem(8);
  }

  &__item-title {
    font-size: rem(17);
    margin-left: rem(10);
  }

  &__item-label {
    right: rem(35);
    font-size: rem(17);
    line-height: 1;
    opacity: 0.5;
    position: absolute;
  }

  body[theme='dark'] & {
    &__section {
      background-color: $AppBackgroundColorDark;
    }
    &__item:not(:last-child):after {
      background-color: #2d2d2f;
    }
    &__item-content {
      color: $AppTextColorLight;
      &:active {
        background-color: #2d2d2f;
      }
    }
  }
}

.boards {
  background-color: $indigo;
}

.todolists {
  background-color: $orange;
}

.appearance {
  background-color: $cyan;
}

.language {
  background-color: $purple;
}

.support {
  background-color: $teal;
}

.features {
  background-color: $yellow;
}

.report {
  background-color: $pink;
}
</style>
