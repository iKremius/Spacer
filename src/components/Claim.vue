<!-- eslint-disable -->
<template>
<div class="claimWrapper">
    <h1 class="claim">SPACER</h1>
    <p class="subclaim">
        Begin your journey through our amazing galaxy,
        <br />
        and discover places you never even heard of.
    </p>
    <p class="subclaim">
        Type anything space-related to start.
    </p>
</div>
</template>

<script>
export default {
    name: 'Claim',
};
</script>

<style scss scoped>
.claimWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
}

.claim {
    font-size: 50px;
    margin: 0;
}

.subclaim {
    margin: 20px 0 0 0;
    font-size: 14px;
    font-weight: 400;
}

@media (min-width: 768px) and (max-width: 1023px) {
    .claim {
        font-size: 90px;
    }

    .subclaim {
        font-size: 17px;
        line-height: 1;
        letter-spacing: 1px;
    }
}

@media (min-width: 1024px) {
    .claim {
        font-size: 100px;
    }

    .subclaim {
        width: 500px;
        font-size: 20px;
    }
}
</style>