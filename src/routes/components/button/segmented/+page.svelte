<script lang="ts">
  import Example from '$lib/components/example/Example.svelte';
  import '@material/web/labs/segmentedbutton/outlined-segmented-button';
  import '@material/web/labs/segmentedbuttonset/outlined-segmented-button-set';
</script>

<div class="flex flex-col gap-4">
  <Example title="Default" id="segmented-button-default">
    <form action="get" class="flex flex-col p-6 gap-2">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label class="flex flex-col gap-2">
        Visibility:
        <md-outlined-segmented-button-set>
          <md-outlined-segmented-button label="Private">
            <md-icon slot="icon">lock</md-icon>
          </md-outlined-segmented-button>
          <md-outlined-segmented-button label="Team" disabled>
            <md-icon slot="icon">group</md-icon>
          </md-outlined-segmented-button>
          <md-outlined-segmented-button label="Everyone">
            <md-icon slot="icon">public</md-icon>
          </md-outlined-segmented-button>
        </md-outlined-segmented-button-set>
      </label>
    </form>
  </Example>
  <Example title="Multi-select" id="segmented-button-multi">
    <form action="get" class="flex flex-col p-6 gap-2">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label class="flex flex-col gap-2">
        Foods:
        <md-outlined-segmented-button-set multiselect>
          <md-outlined-segmented-button label="Cheese" />
          <md-outlined-segmented-button label="Tomatoes" />
          <md-outlined-segmented-button label="Mushrooms" />
          <md-outlined-segmented-button label="Spinach" />
        </md-outlined-segmented-button-set>
      </label>
    </form>
  </Example>
  <Example title="Icons only" id="segmented-button-icons-only">
    <form action="get" class="flex flex-col p-6 gap-2">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label class="flex flex-col gap-2">
        Currency:
        <md-outlined-segmented-button-set>
          <md-outlined-segmented-button selected aria-label="Euro">
            <md-icon slot="icon">euro</md-icon>
          </md-outlined-segmented-button>
          <md-outlined-segmented-button aria-label="Yen">
            <md-icon slot="icon">currency_yen</md-icon>
          </md-outlined-segmented-button>
          <md-outlined-segmented-button aria-label="Pound">
            <md-icon slot="icon">currency_pound</md-icon>
          </md-outlined-segmented-button>
          <md-outlined-segmented-button aria-label="Rupee">
            <md-icon slot="icon">currency_rupee</md-icon>
          </md-outlined-segmented-button>
          <md-outlined-segmented-button aria-label="Ruble">
            <md-icon slot="icon">currency_ruble</md-icon>
          </md-outlined-segmented-button>
          <md-outlined-segmented-button aria-label="Yuan">
            <md-icon slot="icon">currency_yuan</md-icon>
          </md-outlined-segmented-button>
          <md-outlined-segmented-button aria-label="Lira">
            <md-icon slot="icon">currency_lira</md-icon>
          </md-outlined-segmented-button>
          <md-outlined-segmented-button aria-label="Franc">
            <md-icon slot="icon">currency_franc</md-icon>
          </md-outlined-segmented-button>
          <md-outlined-segmented-button aria-label="Bitcoin">
            <md-icon slot="icon">currency_bitcoin</md-icon>
          </md-outlined-segmented-button>
          <md-outlined-segmented-button disabled aria-label="No currency">
            <md-icon slot="icon">money_off</md-icon>
          </md-outlined-segmented-button>
        </md-outlined-segmented-button-set>
      </label>
    </form>
  </Example>
</div>
