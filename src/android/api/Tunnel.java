package com.nabto.api;

/**
 * Result object of the function {@link NabtoApi#tunnelOpenTcp(int, String, String, int, Session)}.
 * <p>
 *     If {@link #getStatus()} is {@link NabtoStatus#OK}, this object contains a valid tunnel handle
 *     that can be used in subsequent client API invocations.
 * </p>
 */
public class Tunnel {
    private Object tunnel;
    private NabtoStatus status;

    Tunnel(Object tunnel, int nabtoStatus) {
        this.tunnel = tunnel;
        this.status = NabtoStatus.fromInteger(nabtoStatus);
    }

    /**
     * Tunnel handle.
     * <p>
     *     If {@link #getStatus()} is different from {@link NabtoStatus#OK}, the return value
     *     is undefined.
     * </p>
     *
     * @return Tunnel handle.
     */
    public Object getTunnel() {
        return tunnel;
    }

    /**
     * The success of the function call which returned this {@link Tunnel} object.
     *
     * @return The success of the function call.
     */
    public NabtoStatus getStatus() {
        return status;
    }
}
