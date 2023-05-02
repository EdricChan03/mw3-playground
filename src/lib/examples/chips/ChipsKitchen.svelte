<div class="flex flex-col gap-3 p-6">
  <!-- Assist chips -->
  <section class="flex flex-col gap-2 p-3 border-2 border-purple-500 rounded">
    <h3 class="font-semibold text-lg border-b-2">Assist</h3>
    <div class="flex flex-wrap gap-3">
      <!-- Assist, default -->
      <div class="flex gap-2 p-3 border-2 border-slate-500 rounded">
        <div class="flex flex-col items-center">
          <h4 class="order-last">Default</h4>
          <md-assist-chip label="Add to calendar">
            <md-icon slot="leading-icon">event</md-icon>
          </md-assist-chip>
        </div>
        <div class="flex flex-col items-center">
          <h4 class="order-last">Default, no icon</h4>
          <md-assist-chip label="Add to calendar" />
        </div>
      </div>

      <!-- Assist, elevated -->
      <div class="flex gap-2 p-3 border-2 border-slate-500 rounded">
        <div class="flex flex-col items-center">
          <h4 class="order-last">Elevated</h4>
          <md-assist-chip label="Open website" elevated>
            <md-icon slot="leading-icon">website</md-icon>
          </md-assist-chip>
        </div>
        <div class="flex flex-col items-center">
          <h4 class="order-last">Elevated, no icon</h4>
          <md-assist-chip label="Open website" elevated />
        </div>
      </div>

      <!-- Assist, disabled -->
      <div class="flex gap-2 p-3 border-2 border-slate-500 rounded">
        <div class="flex flex-col items-center">
          <h4 class="order-last">Disabled</h4>
          <md-assist-chip label="Ask ChatGPT" disabled>
            <md-icon slot="leading-icon">mic</md-icon>
          </md-assist-chip>
        </div>
        <div class="flex flex-col items-center">
          <h4 class="order-last">Disabled, no icon</h4>
          <md-assist-chip label="Ask ChatGPT" disabled />
        </div>
      </div>

      <!-- Assist, disabled + elevated -->
      <div class="flex gap-2 p-3 border-2 border-slate-500 rounded">
        <div class="flex flex-col items-center">
          <h4 class="order-last">Disabled + elevated</h4>
          <md-assist-chip label="Ask ChatGPT" disabled elevated>
            <md-icon slot="leading-icon">mic</md-icon>
          </md-assist-chip>
        </div>
        <div class="flex flex-col items-center">
          <h4 class="order-last">Disabled + elevated, no icon</h4>
          <md-assist-chip label="Ask ChatGPT" disabled elevated />
        </div>
      </div>
    </div>
  </section>

  <!-- Filter chips -->
  <section class="flex flex-col gap-2 p-3 border-2 border-orange-500 rounded">
    <h3 class="font-semibold text-lg border-b-2">Filter</h3>
    <div class="flex flex-wrap gap-3">
      <!-- Filter, default -->
      <div class="flex gap-2 p-3 border-2 border-slate-500 rounded">
        <div class="flex flex-col items-center">
          <h4 class="order-last">Default</h4>
          <md-filter-chip label="Washer/Dryer">
            <md-icon slot="leading-icon">laundry</md-icon>
          </md-filter-chip>
        </div>
        <div class="flex flex-col items-center">
          <h4 class="order-last">No icon</h4>
          <md-filter-chip label="Washer/Dryer" />
        </div>
      </div>

      <!-- Filter, elevated -->
      <div class="flex gap-2 p-3 border-2 border-slate-500 rounded">
        <div class="flex flex-col items-center">
          <h4 class="order-last">Elevated</h4>
          <md-filter-chip label="Ramp access" elevated>
            <md-icon slot="leading-icon">accessible</md-icon>
          </md-filter-chip>
        </div>
        <div class="flex flex-col items-center">
          <h4 class="order-last">Elevated, no icon</h4>
          <md-filter-chip label="Ramp access" elevated />
        </div>
      </div>

      <!-- Filter, disabled -->
      <div class="flex gap-2 p-3 border-2 border-slate-500 rounded">
        <div class="flex flex-col items-center">
          <h4 class="order-last">Disabled</h4>
          <md-filter-chip label="Garden" disabled>
            <md-icon slot="leading-icon">outdoor_garden</md-icon>
          </md-filter-chip>
        </div>
        <div class="flex flex-col items-center">
          <h4 class="order-last">Disabled, no icon</h4>
          <md-filter-chip label="Garden" disabled />
        </div>
      </div>

      <!-- Filter, disabled + elevated -->
      <div class="flex gap-2 p-3 border-2 border-slate-500 rounded">
        <div class="flex flex-col items-center">
          <h4 class="order-last">Disabled + elevated</h4>
          <md-filter-chip label="Cats OK" disabled elevated>
            <md-icon slot="leading-icon">pets</md-icon>
          </md-filter-chip>
        </div>
        <div class="flex flex-col items-center">
          <h4 class="order-last">Disabled + elevated, no icon</h4>
          <md-filter-chip label="Cats OK" disabled elevated />
        </div>
      </div>
    </div>
  </section>

  <!-- Suggestion chips -->
  <section class="flex flex-col gap-2 p-3 border-2 border-emerald-500 rounded">
    <h3 class="font-semibold text-lg border-b-2">Suggestion</h3>
    <div class="flex flex-wrap gap-3">
      <!-- Filter, default -->
      <div class="flex gap-2 p-3 border-2 border-slate-500 rounded">
        <div class="flex flex-col items-center">
          <h4 class="order-last">Default</h4>
          <md-suggestion-chip label="example@example.com">
            <md-icon slot="leading-icon">email</md-icon>
          </md-suggestion-chip>
        </div>
        <div class="flex flex-col items-center">
          <h4 class="order-last">No icon</h4>
          <md-suggestion-chip label="example@example.com" />
        </div>
      </div>

      <!-- Filter, elevated -->
      <div class="flex gap-2 p-3 border-2 border-slate-500 rounded">
        <div class="flex flex-col items-center">
          <h4 class="order-last">Elevated</h4>
          <md-suggestion-chip label="abc@example.com" elevated>
            <md-icon slot="leading-icon">email</md-icon>
          </md-suggestion-chip>
        </div>
        <div class="flex flex-col items-center">
          <h4 class="order-last">Elevated, no icon</h4>
          <md-suggestion-chip label="abc@example.com" elevated />
        </div>
      </div>

      <!-- Filter, disabled -->
      <div class="flex gap-2 p-3 border-2 border-slate-500 rounded">
        <div class="flex flex-col items-center">
          <h4 class="order-last">Disabled</h4>
          <md-suggestion-chip label="test@example.com" disabled>
            <md-icon slot="leading-icon">email</md-icon>
          </md-suggestion-chip>
        </div>
        <div class="flex flex-col items-center">
          <h4 class="order-last">Disabled, no icon</h4>
          <md-suggestion-chip label="test@example.com" disabled />
        </div>
      </div>

      <!-- Filter, disabled + elevated -->
      <div class="flex gap-2 p-3 border-2 border-slate-500 rounded">
        <div class="flex flex-col items-center">
          <h4 class="order-last">Disabled + elevated</h4>
          <md-suggestion-chip label="hi@example.com" disabled elevated>
            <md-icon slot="leading-icon">email</md-icon>
          </md-suggestion-chip>
        </div>
        <div class="flex flex-col items-center">
          <h4 class="order-last">Disabled + elevated, no icon</h4>
          <md-suggestion-chip label="hi@example.com" disabled elevated />
        </div>
      </div>
    </div>
  </section>
</div>
