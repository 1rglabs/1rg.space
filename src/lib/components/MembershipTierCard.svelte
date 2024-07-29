<script lang="ts">
    export let tier: string;
    export let description: string;
    export let access: string;
    export let price: string;
    export let cancellationPolicy: string | undefined = "cancel any time";

</script>

<div class="grid grid-rows-7 p-2 md:p-8 border-2 rounded-md border-slate-300 shadow">
    <div class="row-span-1 text-center mt-4 font-bold uppercase text-lg lg:text-xl tracking-wide text-mediumorchid">{tier}</div>
    <div class="row-span-2 text-center font text-sm lg:text-lg">
        {description}
    </div>
    <div class="row-span-3 font text-sm lg:text-lg">
        What's included:
        <ul class="list-disc list-inside ml-4">
            <li>{access}</li>
            {#if tier === "Dedicated Desk"}
                <li>A personal set of keys</li>
            {/if}
            <li>Invitations to private events</li>
            <li>Priority access to our monthly Community Dinners</li>
            <li>Discounted rates for evening/weekend space rentals</li>
            {#if tier === "Dedicated Desk" || tier === "Hot Desk"}
                <li>One complimentary event per month</li>
            {/if}
        </ul>
    </div>
    <div class="row-span-1 mt-4 text-center">
        <p class="font-bold text-m lg:text-xl">${price}/month + HST</p>
        <p class="text-sm lg:text-lg">{cancellationPolicy}</p>
    </div>
</div>