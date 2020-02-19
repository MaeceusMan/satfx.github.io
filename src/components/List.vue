<template>
    <div class="events container">
        <h2 class="subtitle is-3">
            Here are your Bank Accounts, click account for more information.
        </h2>
        <div class="columns is-multiline">
            <div v-for="event in events" :event="event" :key="event.id" class="column is-one-quarter">
                <router-link :to="'/event/' + event.id">
                    <Card :event="event" />
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    import Card from '@/components/Card';
    export default {
        name: 'List',
        components : {
            Card
        },
        data () {
            return {
                event: {},
                events: [
                    {
                        id: 1,
                        name: 'Cash Account',
                        number: '12345GBR',
                        balance: '£45,000',
                        statements: [ '£2000', '£4500', '£17,350'],
                        messaging: {1: "buying £300,000 with EUR please", 2: "Can do"}
                    },
                    {
                        id: 2,
                        name: 'Merchant Account',
                        number: 'GBR67553320004',
                        balance: '£75,342',
                        statements: [ '£4,000', '£40,500', '£17,350', '£23'],
                        messaging: {1: "selling £17,000, buying UAE", 2: "We can do that at 1.75, sound good?", 3: "Are you sure you can't do 1.78?", 4: "Fine, done."}
                    },
                    {
                        id: 3,
                        name: 'MMB Account',
                        number: '671337YLT',
                        balance: '£5,000',
                        statements: [ '£250,000'],
                        messaging: {1: "I'd like to exchange for 14000000 aussie dollars with pounds.", 2: "Seriously?", 3: "Oh sorry typo, I meant 14,000." }
                    }
                ]
            }
        }
    }
</script>
<style lang="scss" scoped>
    .events {
        margin-top: 100px;
        text-align: center;
    }
</style>