<template>
    <div class="wrapper" @click="modal.closeModal" >
        <div class="modal" @click.stop>
            <div class="сard" @click.stop v-if="modal.type === 'card' || type === 'reg'">
                <h2>{{modal.type === 'card' ? 'Add Card' : 'Registration'}}</h2>
                <div>
                    <label class="card-label">
                        <h4>{{modal.type === 'card' ? 'Title:' : 'Login:'}}</h4>
                        <CustomInput
                            :cls="'modal'"
                            v-model="modal.titleCard"
                        />
                    </label>
                    <label class="card-label">
                        <h4>{{modal.type === 'card' ? 'Description:' : 'Password:'}}</h4>
                        <CustomInput
                            :cls="'modal'"
                            v-model="modal.bodyCard"
                        />
                    </label>
                </div>
            </div>
            <div v-else>
                <h2>{{modal.type === 'adding' ? 'Add Category' : 'Edit Title'}}</h2>
                <label class="modal-label">
                    <h4>{{modal.type === 'adding' ? 'Name:' : 'Title:'}}</h4>
                    <CustomInput
                        :cls="'modal'"
                        v-model="modal.title"
                    />
                </label>
            </div>
            <div class="btns">
                <CustomButton v-if="!type" @click="modal.closeModal">
                    <img src="@/assets/cancel.svg" class="btn" alt="cancel"/>
                </CustomButton>
                <CustomButton @click="onClickBtn">
                    <img src="@/assets/save.svg" class="btn" alt="save"/>
                </CustomButton>
            </div>
        </div>
    </div>
</template>

<script setup>
    import CustomButton from '@/components/UI/CustomButton.vue';
    import CustomInput from '@/components/UI/CustomInput.vue';
    import {useModalStore} from "@/stores/modal";
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const props = defineProps({
        type: String
    })

    const modal = useModalStore();

    document.body.style.overflow = 'hidden';

    const onClickBtn = () => {

        if(modal.type === 'adding') {
            modal.addCategory()
        } else if(modal.type === 'editing') {
            modal.saveTitle()
        } else if(modal.type === 'card') {
            modal.addCard()
        } else if( props.type === 'reg') {
            router.push('/catalog')
        }
    }
</script>

<style scoped lang="scss">
    .wrapper {
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        height: 100vh;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 4;
        display: flex;
        justify-content: center;
        align-items: center;

        h2 {
            text-align: center;
        }

        .card-label {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 20px 0;
        }

        .modal {
            min-width: 400px;
            min-height: 200px;
            background-color: white;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 10px;

            .modal-label {
                display: flex;
                align-items: center;
                margin: 20px 0;

                h4 {
                    user-select: none;
                }
            }

            .btns {
                display: flex;
                align-items: center;

                button + button {
                    margin-left: 20px;
                }
            }

            .custom-input {
                margin-left: 10px;
            }
        }
    }
</style>