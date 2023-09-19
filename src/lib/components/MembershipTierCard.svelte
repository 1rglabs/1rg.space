<script lang="ts">
    export let tier: string;
    export let description: string;
    export let access: string;
    export let price: string;
    export let cancellationPolicy: string | undefined = "cancel any time";

</script>

<div class="grid grid-rows-6 p-8 border-2 rounded-md border-slate-300 shadow">
    <div class="row-span-1 text-center mt-4 font-bold uppercase text-xl lg:text-2xl tracking-wide text-mediumorchid">{tier}</div>
    <div class="row-span-2 text-center font text-m lg:text-lg">
        {description}
    </div>
    <div class="row-span-2 mt-2 font text-m lg:text-lg">
        What's included:
        <ul class="list-disc list-inside ml-4">
            <li>Tuesday Community Dinners</li>
            <li>{access}</li>
            <li>Any future community event</li>
            <li>Open guest policy</li>
        </ul>
    </div>
    <div class="row-span-1 mt-4 text-center">
        <p class="font-bold text-lg lg:text-xl">${price}/month + HST</p>
        <p class="text-m lg:text-lg">{cancellationPolicy}</p>
    </div>
</div>