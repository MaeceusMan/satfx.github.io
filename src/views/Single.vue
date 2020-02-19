<template>
    <div class="event-single">
        <section class="hero is-dark">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        {{ event.name }}
                    </h1>
                    <h2 class="subtitle ">
                        <strong>Account Number:</strong> {{ event.number }}
                        <br>
                        <strong>Balance:</strong> {{ event.balance }}
                    </h2>
                </div>
            </div>
        </section>
        <section class="event-content">
            <div class="container">
                <br/>
                <p class="is-size-5"><strong>Statements:</strong> {{ event.statements }}</p>
                <p class="is-size-5"><strong>Messaging:</strong> {{ event.messaging }}</p>
                <div class="event-images columns is-multiline has-text-centered">
                    <div v-for="image in event.images" :key="image.id" class="column is-one-third">
                        <img :src="image" :alt="event.name">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    export default {
        name: 'EventSingle',
        data () {
            return {
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
                ],
                event: {}
            }
        },
        created() {
            const ID = Number(this.$route.params.id);
            let event = this.events.find(event => event.id === ID);
            this.event = event;
        }
    }
</script>